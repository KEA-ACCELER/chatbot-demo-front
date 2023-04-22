export const Message = (props) => {
    return (
        <div
            className={[
                "Message",
                props.mode == 0 ? `Message_my` : `Message_response`,
            ].join(" ")}
        >
            {props.value}
        </div>
    );
};
