import {
  Box,
  Container,
  Flex,
  HStack,
  Select,
  Text,
  // useBreakpointValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { CoinsContext } from '../contexts/CoinsContext';
import AuthModal from './auth/AuthModal';

const Header = () => {
  // const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { currency, setCurrency } = useContext(CoinsContext);

  const navigate = useNavigate();

  return (
    <Box as="header" h={20} minH={16} boxShadow="xl" px={[null, 4, null, 16]}>
      <Container maxW="100%" py={{ base: '4', lg: '5' }}>
        <Flex justify="space-between" alignItems="center">
          <Text
            onClick={() => navigate('/')}
            fontFamily="Montserrat"
            fontSize="xl"
            fontWeight="bold"
            color="yellow.400"
            cursor="pointer"
          >
            Coin Tracker
          </Text>
          <HStack>
            <Select
              w={100}
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
            </Select>
            <AuthModal />
            {/* <ColorModeSwitcher /> */}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
