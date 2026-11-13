import client from 'socket.io-client';
import { URL_BASE } from '../services/api';

// URL vazia = mesmo domínio da página.
const io = client(URL_BASE || undefined);

export default io;
