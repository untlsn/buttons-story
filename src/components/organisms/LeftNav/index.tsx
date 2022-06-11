import { Link } from 'react-router-dom';

const links = [
  { children: 'colors', to: '/colors', id: 0 },
  { children: 'typography', to: '/typography', id: 1 },
  { children: 'spaces', to: '/spaces', id: 2 },
  { children: 'buttons', to: '/buttons', id: 3 },
  { children: 'inputs', to: '/inputs', id: 4 },
  { children: 'grid', to: '/grid', id: 5 },
];

function LeftNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-gray-100 p-1/6 space-y-12vh">
      <h1 className="native-hocus">
        <a href="https://devchallenges.io/" className="font-bold">
          <span className="text-logo-orange">Dev</span>
          challanges.io
        </a>
      </h1>

      <ul className="font-bold capitalize space-y-4">
        {links.map(({ id, ...link }) => (
          <li key={id}>
            <Link className={`${pathname == link.to ? '' : 'opacity-50'} native-hocus`} {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftNav;
