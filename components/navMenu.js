import { BackgroundColor, TextColor } from "state";
import { ColorSlider, NavMenuSection } from "components";

import React from "react";
import { classNames } from "util/style";
import content from "content/nav";
import styles from "style/navMenu.module.css";

const NavMenu = ({ open }) => {
  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();
  return (
    <div
      className={classNames([
        styles.navMenu,
        open ? styles.navMenuOpen : styles.navMenuClosed,
      ])}
    >
      {content.sections.map((section) => (
        <NavMenuSection
          section={section}
          smallStyle={classNames([styles.column, styles.columnSmall])}
          largeStyle={classNames([styles.column, styles.columnLarge])}
        />
      ))}
      <div className={classNames([styles.column, styles.colorColumn])}>
        <h3 className="unstyled">{content.colorsHeader}</h3>
        <h4 className="unstyled">{content.textColor}</h4>
        <ColorSlider stateContainer={textColor} />
        <h4 className="unstyled">{content.backgroundColor}</h4>
        <ColorSlider stateContainer={backgroundColor} />
      </div>
    </div>
  );
};

export default NavMenu;
