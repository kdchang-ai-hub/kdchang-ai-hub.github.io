/**
 * Ejected from @docusaurus/theme-classic (MIT).
 *
 * Only `useLocaleUrls` differs from upstream. The theme's own
 * `useAlternatePageUtils` builds the target URL with
 * `pathname.replace(baseUrl, '')`, which silently fails whenever the current
 * pathname does not carry the locale's exact base URL — e.g. `/en` instead of
 * `/en/` (which is what `trailingSlash: false` produces for the localized home
 * page), or any `/en/...` path visited from a dev server that only built the
 * default locale. The replace is then a no-op and the locale prefix gets
 * stacked on top of itself: /en -> /en//en -> /en//en//en ...
 *
 * See https://github.com/facebook/docusaurus/issues/9170
 *
 * The version below strips every known locale prefix off the pathname first,
 * so switching locales is idempotent from any URL.
 */

import React, {type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {mergeSearchStrings, useHistorySelector} from '@docusaurus/theme-common';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

function useLocaleUrls() {
  const {
    siteConfig,
    i18n: {locales, defaultLocale, localeConfigs},
  } = useDocusaurusContext();
  const {pathname} = useLocation();

  const getLocaleConfig = (locale: string) => {
    const localeConfig = localeConfigs[locale];
    if (!localeConfig) {
      throw new Error(
        `Docusaurus bug, no locale config found for locale=${locale}`,
      );
    }
    return localeConfig;
  };

  // Base URL shared by every locale, e.g. "/" or "/myBase/"
  const rootBaseUrl = getLocaleConfig(defaultLocale).baseUrl;

  // Path prefixes that identify a localized site, e.g. ["en/"]
  const localePrefixes = locales
    .map((locale) => getLocaleConfig(locale).baseUrl)
    .filter((baseUrl) => baseUrl !== rootBaseUrl)
    .map((baseUrl) => baseUrl.slice(rootBaseUrl.length));

  // The current path, stripped of the base URL and of any locale prefix
  const pathnameSuffix = (() => {
    let suffix = pathname.startsWith(rootBaseUrl)
      ? pathname.slice(rootBaseUrl.length)
      : pathname.replace(/^\//, '');
    let stripped = true;
    while (stripped) {
      stripped = false;
      for (const prefix of localePrefixes) {
        if (suffix === prefix.replace(/\/$/, '')) {
          suffix = '';
          stripped = true;
        } else if (suffix.startsWith(prefix)) {
          suffix = suffix.slice(prefix.length);
          stripped = true;
        }
      }
    }
    return suffix;
  })();

  return (locale: string) => {
    const localeConfig = getLocaleConfig(locale);
    const url = `${localeConfig.baseUrl}${pathnameSuffix}`;
    // Localized sites on another domain need a fully qualified URL; on the
    // same domain a `pathname://` path forces the full page reload that
    // switching locales requires.
    return localeConfig.url === siteConfig.url
      ? `pathname://${url}`
      : `${localeConfig.url}${url}`;
  };
}

function useLocaleDropdownUtils() {
  const {
    i18n: {localeConfigs},
  } = useDocusaurusContext();
  const createLocaleUrl = useLocaleUrls();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const getLocaleConfig = (locale: string) => {
    const localeConfig = localeConfigs[locale];
    if (!localeConfig) {
      throw new Error(
        `Docusaurus bug, no locale config found for locale=${locale}`,
      );
    }
    return localeConfig;
  };

  return {
    getURL: (locale: string, options: {queryString: string | undefined}) => {
      // We have 2 query strings because
      // - there's the current one
      // - there's one user can provide through navbar config
      // see https://github.com/facebook/docusaurus/pull/8915
      const finalSearch = mergeSearchStrings(
        [search, options.queryString],
        'append',
      );
      return `${createLocaleUrl(locale)}${finalSearch}${hash}`;
    },
    getLabel: (locale: string) => getLocaleConfig(locale).label,
    getLang: (locale: string) => getLocaleConfig(locale).htmlLang,
  };
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString,
  ...props
}: Props): ReactNode {
  const utils = useLocaleDropdownUtils();

  const {
    i18n: {currentLocale, locales},
  } = useDocusaurusContext();
  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    return {
      label: utils.getLabel(locale),
      lang: utils.getLang(locale),
      to: utils.getURL(locale, {queryString}),
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
            // class name. This cannot be substituted with isActive, because the
            // target URLs contain `pathname://` and therefore are not NavLinks!
            mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : utils.getLabel(currentLocale);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
