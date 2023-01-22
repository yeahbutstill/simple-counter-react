import FirstComponent, {FirstComponentV1} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import ForthComponent from './ForthComponent'
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComponent() {
    return (
        <div className="App">
            My Todo Application
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <ForthComponent></ForthComponent>
            <FirstComponentV1></FirstComponentV1>
            <LearningJavaScript></LearningJavaScript>
        </div>
    );
}