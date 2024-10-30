export default function ComponentsLayout(props: LayoutProps): JSX.Element {
    return (
        <section>
            <span className="flag">app/components/layout(.tsx)</span>
            <nav>Navigation Placeholder</nav>
            <main>{props.children}</main>
        </section>
    );
}