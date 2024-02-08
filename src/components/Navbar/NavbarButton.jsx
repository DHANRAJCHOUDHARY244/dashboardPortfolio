import React from "react";

export default function MenuBarHeader(props) {
  return (
    <div className="art-menu-bar-header">
      {/* when clicked on it, add class art-active and shows/hides the navbar */}
      <div
        className={
          props.navbarActive
            ? "art-menu-bar-btn art-active"
            : "art-menu-bar-btn"
        }
        onClick={() => {
          props.sidebarActive && props.setSidebarActive(false);
          props.setNavbarActive(!props.navbarActive);
        }}
      >
        <span></span>
      </div>
    </div>
  );
}
