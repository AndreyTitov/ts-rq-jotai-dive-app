/**
 * @file Contains api client service.
 */

import axios from 'axios';
import { API_URL } from '../constants/api.constant';

const pureClient = axios.create({
    baseURL: API_URL,
});

export {
    pureClient,
};
