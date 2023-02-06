import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-52%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

type ModelStakeT = {
	isOpen: boolean;
	handleClose: () => void;
};

export default function ModelStake({ isOpen, handleClose }: ModelStakeT) {
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={isOpen}
				onClose={handleClose}
				closeAfterTransition
			>
				<Fade in={isOpen}>
					<Box sx={style}>
						<Typography
							id="transition-modal-title"
							variant="h6"
							component="h2"
						>
							Text in a modal
						</Typography>
						<Typography
							id="transition-modal-description"
							sx={{ mt: 2 }}
						>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula.
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
