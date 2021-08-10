import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const photo = { name: "picture", category: "portraits", description: "meow", index: 2 };
const onClose = jest.fn();

afterEach(cleanup)

describe('Modal is rendering', () => {

  it('renders', () => {
    render(<Modal currentPhoto={photo} onClose={onClose} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={photo} onClose={onClose} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a button', () => {
    const { getByTestId } = render(<Modal currentPhoto={photo} onClose={onClose} />)
    expect(getByTestId('modal-close-button')).toHaveTextContent("Close this modal");
  })

  it('renders a h3', () => {
    const { getByTestId } = render(<Modal currentPhoto={photo} onClose={onClose} />)
    expect(getByTestId('modal-title')).toHaveTextContent("picture");
  })

});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal onClose={onClose} currentPhoto={photo} />)
        fireEvent.click(getByText('Close this modal'));
        expect(onClose).toHaveBeenCalledTimes(1);
    })
})