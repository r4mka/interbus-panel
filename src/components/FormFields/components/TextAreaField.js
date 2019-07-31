import { Input } from 'antd';
import textFieldMap from '../maps/textFieldMap';
import createComponent from './BaseComponent';

const { TextArea } = Input;

export default createComponent(TextArea, textFieldMap);
