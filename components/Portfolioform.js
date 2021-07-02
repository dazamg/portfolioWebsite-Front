import { useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import FileUpload from 'components/FileUpload'

const initialState = {
    images: []
}
const PortfolioForm = ({onSubmit, initialData = {}}) => {
    const [values, setValues] = useState(initialState);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { register, handleSubmit, setValue, photo} = useForm({defaultValues: initialData});
    // const [uploaded, setUploaded] = useState(false)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        register('startDate')
        register('endDate')
    }, [register])

    useEffect(()=> {
        const { startDate, endDate} = initialData;
        if(startDate){ setStartDate(new Date(startDate))}
        if(endDate){ setEndDate(new Date(endDate))}
    }, [initialData])
    
    const handleDateChange = (dateType, setDate) => (date) => {
        setValue(dateType, date);
        setDate(date);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
            {...register("title") }
            name="title"
            type="text"
            className="form-control"
            id="title"/>
        </div>

        <div className="form-group">
            <label htmlFor="city">Company</label>
            <input
            {...register("company") }
            name="company"
            type="text"
            className="form-control"
            id="company"/>
        </div>

        <div className="form-group">
            <label htmlFor="city">Company Website</label>
            <input
            {...register("companyWebsite") }
            name="companyWebsite"
            type="text"
            className="form-control"
            id="companyWebsite"/>
        </div>

        <div className="form-group">
            <label htmlFor="street">Location</label>
            <input
            {...register("location") }
            name="location"
            type="text"
            className="form-control"
            id="location"/>
        </div>

        <div className="form-group">
            <label htmlFor="street">Job Title</label>
            <input
            {...register("jobTitle") }
            name="jobTitle"
            type="text"
            className="form-control"
            id="jobTitle"/>
        </div>

        {/* <div className="form-group">
            <label htmlFor="street">Job Picture</label>
            <input
            // values={values}
            // setValues={setValues}
            {...register("photo") }
            name="photo"
            type="file"
            className="form-control"
            id="photo"/>
        </div> */}
        {/* {JSON.stringify(register)} */}

        <FileUpload
            className="form-group"
            values={values}
            setValues={setValues}
            setLoading={setLoading}
            // setUploaded={setUploaded}
            {...register("images") }
            id="images"
        /> 
        {JSON.stringify(values)}

        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
            {...register("description") }
            name="description"
            rows="5"
            type="text"
            className="form-control"
            id="description">
            </textarea>
        </div>
        <div className="form-group">
            <label htmlFor="street">Tech Stack</label>
            <input
            {...register("techStack") }
            name="techStack"
            type="text"
            className="form-control"
            id="techStack"/>
        </div>

        <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <div>
                <DatePicker
                    showYearDropdown
                    selected={startDate}
                    onChange={handleDateChange('startDate', setStartDate)}
                />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <div>
                <DatePicker
                    disabled={!endDate}
                    showYearDropdown
                    selected={endDate}
                    onChange={handleDateChange('endDate', setEndDate)}    
                />
            </div>
        </div>
        <div className="form-group">
            { endDate &&
            <button 
                type="button"
                className="btn btn-danger"
                onClick={() => handleDateChange('endDate', setEndDate(null))} >
                No end date
            </button>
            }
            { !endDate &&
            <button 
                 type="button"
                 className="btn btn-success"
                 onClick={() => handleDateChange('endDate', setEndDate(new Date(new Date().setHours(0,0,0,0))))} >
                 Set end date
            </button>
            }
           
        </div>
        <button
            type="submit"
            className="btn btn-primary">Create
        </button>
        </form>
    )
}

export default PortfolioForm;