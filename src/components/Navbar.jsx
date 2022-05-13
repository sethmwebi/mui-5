import {
	AppBar,
	Toolbar,
	styled,
	Typography,
	Box,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					SETH DEV
				</Typography>
				<Pets sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail color="white" />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						onClick={() => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://images.pexels.com/photos/10898766/pexels-photo-10898766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<Typography variant="span">Jessica</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
