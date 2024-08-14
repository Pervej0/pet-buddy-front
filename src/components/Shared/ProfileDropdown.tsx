import React from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logOutUser from "@/services/actions/logOutUser";
import { TUserInfo } from "@/types/common.type";

const ProfileDropdown = () => {
  const user = getUserInfo() as TUserInfo;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    // setOpen(false);
    logOutUser(router);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {!user ? (
        <Button LinkComponent={Link} href="/login">
          Login
        </Button>
      ) : (
        <div>
          <Button
            ref={anchorRef}
            sx={{ backgroundColor: "#ffffff", color: "#000000" }}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            My Profile
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <Link href={`/dashboard/${user?.role}/profile`}>
                        <MenuItem>Profile</MenuItem>
                      </Link>
                      <Link href={`/dashboard/${user?.role}`}>
                        <MenuItem>Dashboard</MenuItem>
                      </Link>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
