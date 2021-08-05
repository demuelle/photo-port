import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<PhotoList currentCategory={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders', () => {
    const { getByTestId } = render(<PhotoList currentCategory={portrait} />)
    expect(getByTestId('photo-flex-row')).toBeTruthy();
  })
})