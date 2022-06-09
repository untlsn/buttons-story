import Helmet from 'react-helmet';

interface TitleProps {
  children: string
}

function Title(props: TitleProps) {
  return (
    <Helmet>
      <title>{props.children}</title>
    </Helmet>
  );
}

export default Title;
