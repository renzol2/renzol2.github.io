import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const StyledLink = ({ href, color, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link color={color} fontWeight="bold">
        {children}
      </Link>
    </NextLink>
  );
};

export default StyledLink;
