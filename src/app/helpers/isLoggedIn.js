import {Store} from 'react-stores';

export default () => !!Store.get('loggedIn');
