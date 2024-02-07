export const ImposterButton = ({ disabled }) => {
    const onClick = () => {
        alert('Hello, , I\'m imposter button!');
    }

    const onKeyDown = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    }

    return(
        <div
            onClick={onClick}
            role='button'
            tabIndex={disabled ? -1 : 0}
            onKeyDown={onKeyDown}
            className={`button ${disabled ? 'button--disabled' : ''}`}
            aria-disabled={disabled}
        >
            Hello
        </div>
    );
};