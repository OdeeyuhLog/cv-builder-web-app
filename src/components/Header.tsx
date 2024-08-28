import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
	return (
		<div className="flex justify-between w-full py-6 px-16 shadow-md">
			<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-blue-500 lowercase">
				cv.builder
			</h2>
			<Button variant="faded" as={Link} href="https://github.com/OdeeyuhLog">
				<GitHubLogoIcon />
				<p> Made by OdeeyuhLog</p>
			</Button>
		</div>
	);
};

export default Header;
