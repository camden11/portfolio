import { BackgroundColor, TextColor } from "state";
import { ColorSlider, NavMenuSection } from "components";
import React, { useMemo } from "react";

import { classNames } from "util/style";
import content from "content/nav";
import styles from "style/navMenu.module.css";

const NavMenu = ({ open }) => {
  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();

  const menuSections = useMemo(() => {
    return content.sections.map((section, index) => (
      <NavMenuSection
        key={index}
        section={section}
        smallStyle={classNames([styles.column, styles.columnSmall])}
        largeStyle={classNames([styles.column, styles.columnLarge])}
      />
    ));
  }, [content.sections.length]);

  return (
    <div
      className={classNames([
        styles.navMenu,
        open ? styles.navMenuOpen : styles.navMenuClosed,
      ])}
    >
      {menuSections}
      <div className={classNames([styles.column, styles.colorColumn])}>
        <h3 className={classNames(["unstyled", styles.colorsHeaderText])}>
          {content.colorsHeader}
        </h3>
        <h4 className={classNames(["unstyled", styles.colorSliderText])}>
          {content.textColor}
        </h4>
        <ColorSlider stateContainer={textColor} />
        <h4 className={classNames(["unstyled", styles.colorSliderText])}>
          {content.backgroundColor}
        </h4>
        <ColorSlider stateContainer={backgroundColor} />
      </div>
    </div>
  );
};

export default NavMenu;
