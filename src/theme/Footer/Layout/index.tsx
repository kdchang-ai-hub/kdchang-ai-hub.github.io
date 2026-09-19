import type { ReactNode } from "react";
import OriginalLayout from "@theme-original/Footer/Layout";
import type LayoutType from "@theme/Footer/Layout";
import type { WrapperProps } from "@docusaurus/types";
import LocaleSwitcher from "@site/src/components/LocaleSwitcher";

type Props = WrapperProps<typeof LayoutType>;

/**
 * Adds the language switcher above the copyright line. It lives here rather
 * than in the navbar so the navbar stays readable on narrow screens.
 */
export default function FooterLayout(props: Props): ReactNode {
  return (
    <OriginalLayout
      {...props}
      copyright={
        <>
          <LocaleSwitcher />
          {props.copyright}
        </>
      }
    />
  );
}
