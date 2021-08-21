import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const StyledLink = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link color="#D60270" fontWeight="bold">
        {children}
      </Link>
    </NextLink>
  );
};

export default StyledLink;
