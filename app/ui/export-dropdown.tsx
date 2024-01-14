import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

export default function ExportDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Export</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["export", "delete"]}>
        {/*<DropdownItem key="new">New file</DropdownItem>*/}
        {/*<DropdownItem key="copy">Copy link</DropdownItem>*/}
        {/*<DropdownItem key="edit">Edit file</DropdownItem>*/}
        <DropdownItem key="export" className="text-danger" color="danger">
          export file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
