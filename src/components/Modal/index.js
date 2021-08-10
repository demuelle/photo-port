function Modal({currentPhoto, onClose}) {

    const {name, category, description, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle" data-testid="modal-title">{name}</h3>
                <img
                    src={require(`../../assets/large/${category}/${index}.jpg`).default}
                    alt={description} 
                    className="img-thumbnail mx-1"
                    key={name}
                    />
                <p>
                {description}
                </p>
                <button data-testid="modal-close-button" type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal;