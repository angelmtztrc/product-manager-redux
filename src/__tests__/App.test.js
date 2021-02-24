import '@testing-library/jest-dom';
import { mount } from 'enzyme';

// components
import App from '../App';

describe('Tests in <App/>', () => {
  let wrapper = mount(<App />);
  test('should render the component successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render a table with products', () => {
    expect(wrapper.find('Products').exists()).toBe(true);
  });
});
