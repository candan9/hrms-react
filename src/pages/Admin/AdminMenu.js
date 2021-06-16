import React from 'react'
import { Menu } from "semantic-ui-react";
export default function AdminMenu() {
    let activeItem = "job-advs";

    return (
      <div>
        <Menu vertical>
          <Menu.Item header>ADMIN</Menu.Item>
          <Menu.Item name="jobAdvs" active={activeItem === "job-advs"}>
            İş ilanları
          </Menu.Item>
        </Menu>
      </div>
    );
}
