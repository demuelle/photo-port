import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders an h1', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('contact-h1-test')).toHaveTextContent('Contact me')
  })

  
  it('renders a submit button', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('submit-button')).toHaveTextContent('Submit')
  })

})