import css from "./Options.module.css";
const Options = ({update, reset, total}) => {
    return (
        <div className={css.options}>
            <button type="button" onClick={() => update("good")}>
                Good
            </button>
            <button type="button" onClick={() => update("neutral")}>
                Neutral
            </button>
            <button type="button" onClick={() => update("bad")}>
                Bad
            </button>
            {Boolean(total) && (
                <button type="button" name="reset" onClick={reset}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
