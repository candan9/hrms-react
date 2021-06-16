import React from 'react'
import { Menu } from "semantic-ui-react";
export default function EmployerMenu() {
    let activeItem = "my-job-advs";

  return (
    <div>
      <Menu vertical>
        <Menu.Item header>EmployerName</Menu.Item>
        <Menu.Item
          name="job-advs"
          active={activeItem === "my-job-advs"}
        >
          İş ilanlarım
        </Menu.Item>
      </Menu>
    </div>
  );
}
