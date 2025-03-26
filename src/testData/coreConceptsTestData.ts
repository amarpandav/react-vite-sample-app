import componentsImg from '../assets/components.png';
import propsImg from '../assets/config.png';
import jsxImg from '../assets/jsx-ui.png';
import stateImg from '../assets/state-mgmt.png';

export const CORE_CONCEPT_TESTDATA = [
    {
        id: 'c1',
        image: componentsImg,
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        id: 'c2',
        image: jsxImg,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        id: 'c3',
        image: propsImg,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        id: 'c4',
        image: stateImg,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
];
