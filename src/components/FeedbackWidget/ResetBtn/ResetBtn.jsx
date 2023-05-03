import { BiRefresh as IconRefresh } from 'react-icons/bi';
import { Button } from './ResetBtn.styled';

const ResetBtn = ({ onClick, size }) => (
  <Button title="reset" onClick={onClick} size={size}>
    <IconRefresh size="100%" />
  </Button>
);

export default ResetBtn;
