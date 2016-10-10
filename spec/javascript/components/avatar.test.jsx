import { expect } from 'chai';
import { render } from 'enzyme';

import Avatar from '../../../app/assets/javascripts/components/components/avatar'

describe('<Avatar />', function() {
  it('renders an img with the given src', function() {
    const src = '/path/to/image.jpg';
    const wrapper = render(<Avatar src={src} size={100} />);
    expect(wrapper.find(`img[src="${src}"]`)).to.have.length(1);
  });
});
