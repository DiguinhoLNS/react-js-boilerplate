import FormContainer from "./container"
import FormRow from "./row"
import FormGroup from "./group"
import FormRender from "./render"
import FormBox from "./box"
import FormSection from "./section"

const Form = {
    Box: FormBox,
    Section: FormSection,
    Container: FormContainer,
    Row: FormRow,
    Group: FormGroup,
    Render: FormRender,
}

export default Form
export {
    FormContainer, FormRow, FormGroup, FormRender,
}