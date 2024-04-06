import { DrawerHeaderProps, createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../../constant';

/**
 * screen
 */
import HomeScreen from '../screens/home.screen';
import AddNewScreen from '../screens/addNew.screen';
import FamilyScreen from '../screens/family.screen';
import AnimalsScreen from '../screens/animals.screen';
import BirdsScreen from '../screens/birds.screen';
import AlphabetsScreen from '../screens/alphabets.screen';

/**
 * header
 */
import Header from '../components/header';


/**
 * create native navigation
 */
const Drawer = createDrawerNavigator();

const AuthSideMenu: React.FunctionComponent = () => {

    return (<>
        <Drawer.Navigator initialRouteName="Start" screenOptions={{
            drawerStyle: {
                backgroundColor: COLORS.meroon,
            },
            drawerLabelStyle: {
                color: COLORS.white
            },
            header: ({ options, route }: DrawerHeaderProps) => {
                const title =
                    options.headerTitle !== undefined
                        ? options.headerTitle
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                return (<Header screenName={title} />)
            }
        }}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                headerShown: true,
            }} />
            <Drawer.Screen name="Familiy" component={FamilyScreen} options={{
                headerShown: true,
            }} />
            <Drawer.Screen name="Animals" component={AnimalsScreen} options={{
                headerShown: true,
            }} />
            <Drawer.Screen name="Birds" component={BirdsScreen} options={{
                headerShown: true,
            }} />
            <Drawer.Screen name="Alphabets" component={AlphabetsScreen} options={{
                headerShown: true,
            }} />
            <Drawer.Screen name="Create New" component={AddNewScreen} options={{
                headerShown: true,
            }} />
        </Drawer.Navigator>

    </>);

};

export default AuthSideMenu;