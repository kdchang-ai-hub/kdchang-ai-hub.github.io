/**
 * Wraps the search bar from @easyops-cn/docusaurus-search-local in a modal.
 *
 * The plugin renders an input straight into the navbar which, below 576px,
 * collapses to an icon and expands over the navbar title on focus. Here the
 * navbar only holds a button; the real search bar lives in a dialog, so it has
 * the full width of the screen and never covers anything.
 */

import {
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import OriginalSearchBar from "@theme-original/SearchBar";
import { useLocation } from "@docusaurus/router";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import Icon from "@site/src/components/Icon";
import styles from "./styles.module.css";

export default function SearchBar(): ReactNode {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const isBrowser = useIsBrowser();
  const isMac = isBrowser && /mac/i.test(navigator.userAgent);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Not the plugin's own `theme.SearchBar.label` (that one is its input
  // placeholder, translated for zh-Hant in i18n/zh-Hant/code.json)
  const label = translate({
    id: "navbar.search.label",
    message: "搜尋",
    description: "The label of the navbar search button",
  });

  // Cmd/Ctrl+K opens the dialog, Escape closes it. The plugin ships its own
  // shortcut handler, disabled in docusaurus.config.ts, because it focuses an
  // input that only exists while the dialog is open.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus the search input and freeze the page behind the dialog
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const input = panelRef.current?.querySelector("input");
    input?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // The plugin navigates with history.push() when a result is picked
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // ...which is a no-op when the result points at the current URL, so also
  // close on any click inside the results dropdown.
  function onPanelClick(event: ReactMouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest('[class*="dropdownMenu"]')) {
      setOpen(false);
    }
  }

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label={label}
      >
        <Icon name="search" size={16} />
        <span className={styles.triggerLabel}>{label}</span>
        {isBrowser && (
          <span className={styles.triggerKeys} aria-hidden="true">
            <kbd>{isMac ? "⌘" : "Ctrl"}</kbd>
            <kbd>K</kbd>
          </span>
        )}
      </button>

      {open && (
        <div className={styles.backdrop} onMouseDown={close}>
          <div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={onPanelClick}
          >
            <OriginalSearchBar />
          </div>
        </div>
      )}
    </>
  );
}
