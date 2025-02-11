import classes from './MyButton.module.css'

export function MyButton({children, ...props}) {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}