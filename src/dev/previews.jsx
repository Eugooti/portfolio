import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Experience from "../components/Experience.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Experience">
                <Experience/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews