import { createClient } from '../src';

const baseURL = 'http://example.com/base';
const client = createClient(`${baseURL}`, 'sample-bucket');

describe('Do test IT', () => {
  it('Should builds a valid image url ', () => {
    expect(
      client.url('demo.jpeg', {
        resize: { width: 200, fit: 'cover' },
      })
    ).toBe(
      'http://example.com/base/eyJidWNrZXQiOiJzYW1wbGUtYnVja2V0Iiwia2V5IjoiZGVtby5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDAsImZpdCI6ImNvdmVyIn19fQ=='
    );
  });
});
