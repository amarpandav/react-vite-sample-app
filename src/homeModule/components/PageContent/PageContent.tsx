import classes from './PageContent.module.css';

interface Props {
    title: string;
    children: React.ReactNode;
}


function PageContent({ title, children }: Props) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;