import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MdError } from "react-icons/md";
import * as Yup from 'yup';
import {MdOutlineArrowForwardIos} from 'react-icons/md'

interface FormValues {
  EventTitle: string;
  SubTitle: string;
  ThumbnailImage: string
  DisplayImage: string
  Location: string
  Landmark: string
  EventDate: string
  StartDate: string
  EndDate: string
  Slider1Title: string
  Slider1SubTitle: string
  WebImage: string
  MobileImage: string
}

const initialValues: FormValues = {
  EventTitle: '',
  SubTitle: '',
  ThumbnailImage: '',
  DisplayImage: '',
  Location: '',
  Landmark: '',
  EventDate: '',
  StartDate: '',
  EndDate: '',
  Slider1Title: '',
  Slider1SubTitle: '',
  WebImage: '',
  MobileImage: '',
};

const validationSchema = Yup.object({

  EventTitle: Yup.string().required('Event Title required'),
  SubTitle: Yup.string().required('SubTitle Required'),
  ThumbnailImage: Yup.string().required('ThumbnailImage Required'),
  DisplayImage: Yup.string().required('DisplayImage Required'),
  Location: Yup.string().required('Location Required'),
  Landmark: Yup.string().required('Landmark Required'),
  EventDate: Yup.date().required('EventDate Required'),
  StartDate: Yup.date().required('StartDate Required'),
  EndDate: Yup.date().required('EndDate Required'),
  Slider1Title: Yup.string().required('Slider Title Required'),
  Slider1SubTitle: Yup.string().required('Slider SubTitle Required'),
  WebImage: Yup.string().required('WebImage Required'),
  MobileImage: Yup.string().required('MobileImage Required'),
});

const onSubmit = (values: FormValues) => {
  console.log(values);
};


const UpcomingForm: React.FC = () => {

  return (
    <div className="h-full w-full bg-white">
      <div className="h-fit w-[78vw] px-[27px] bg-white">
        <div className="flex flex-col gap-1 text-black pt-3 border-b-2">
          <h2>Project form</h2>
          <div className="flex text-sm ">
          <Link
                        href="/admin"
                        className=''>
                        <button className=' flex items-center text-blue-400'>Project <MdOutlineArrowForwardIos/></button>
                    </Link>
            <Link
                        href="/admin/add-event"
                        className=''>
                        <button className=' text-blue-400'>Project form</button>
                    </Link>
          </div>

        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form >
              <div className="flex flex-col gap-2 py-2 text-black">
                <div className="flex flex-col" >
                  <label htmlFor="name" className="text-gray-600 text-sm">Event Title</label>
                  <Field id="EventTitle" name="EventTitle" className="relative border h-7 w-52 bg-blue-100" />
                  {touched.EventTitle && errors.EventTitle ? <div className="text-red-800 text-xs ">{errors.EventTitle }</div> : null}
                </div>
                <div className="flex flex-col text-black">
                  <label htmlFor="SubTitle" className="text-gray-600 text-sm">SubTitle</label>
                  <Field id="SubTitle" name="SubTitle" className="border h-7 w-52 bg-blue-100" />
                  {touched.SubTitle && errors.SubTitle ? <div className="text-red-800 text-xs ">{errors.SubTitle}</div> : null}
                </div>
                <div className="flex flex-col text-black">
                  <label htmlFor="ThumbnailImage" className="text-gray-600 text-sm">Thumbnail Image</label>
                  <Field id="ThumbnailImage" name="ThumbnailImage" type="file" className="border h-7 w-52 bg-blue-100" />
                  {touched.ThumbnailImage && errors.ThumbnailImage ? <div className="text-red-800 text-xs ">{errors.ThumbnailImage}</div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="DisplayImage" className="text-gray-600 text-sm">Display Image</label>
                  <Field id="DisplayImage" name="DisplayImage" className="border h-7 w-52 bg-blue-100" />
                  {touched.DisplayImage && errors.DisplayImage ? <div className="text-red-800 text-xs ">{errors.DisplayImage}</div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Location" className="text-gray-600 text-sm">Location</label>
                  <Field id="Location" name="Location" className="border h-7 w-52 bg-blue-100" />
                  {touched.Location && errors.Location ? <div className="text-red-800 text-xs ">{errors.Location}</div> : null}
                </div>
                <div className="flex flex-col" >
                  <label htmlFor="Landmark" className="text-gray-600 text-sm">Landmark</label>
                  <Field id="Landmark" name="Landmark" className="border h-7 w-52 bg-blue-100" />
                  {touched.Landmark && errors.Landmark ? <div className="text-red-800 text-xs ">{errors.Landmark}</div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="EventDate" className="text-gray-600 text-sm">EventDate</label>
                  <Field id="EventDate" type='date' name="EventDate" className="border h-7 w-52 bg-blue-100" />
                  {touched.EventDate && errors.EventDate ? <div className="text-red-800 text-xs ">{errors.EventDate}</div> : null}
                </div>
              </div>



              <div className="flex gap-4 text-black">
                <div className="flex flex-col">
                  <label htmlFor="StartDate" className="text-gray-600 text-sm">StartDate</label>
                  <Field id="StartDate" type='date' name="StartDate" className="border h-7 w-52 bg-blue-100" />
                  {touched.StartDate && errors.StartDate ? <div className="text-red-800 text-xs "></div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="EndDate" className="text-gray-600 text-sm">EndDate</label>
                  <Field id="EndDate" type='date' name="EndDate" className="border h-7 w-52 bg-blue-100" />
                  {touched.EndDate && errors.EndDate ? <div className="text-red-800 text-xs ">{errors.EndDate}</div> : null}
                </div>
              </div>


              <div className=" flex gap-4 pt-2">
                <div className="flex flex-col">
                  <label htmlFor="Slider1Title" className="text-gray-600 text-sm">Slider 1 Title</label>
                  <Field id="Slider1Title" name="Slider1Title" className="border h-7 w-52 bg-blue-100" />
                  {touched.Slider1Title && errors.Slider1Title ? <div className="text-red-800 text-xs ">{errors.Slider1Title}</div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Slider1SubTitle" className="text-gray-600 text-sm">Slider 1 SubTitle</label>
                  <Field id="Slider1SubTitle" name="Slider1SubTitle" className="border h-7 w-52 bg-blue-100" />
                  {touched.Slider1SubTitle && errors.Slider1SubTitle ? <div className="text-red-800 text-xs ">{errors.Slider1SubTitle}</div> : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="WebImage" className="text-gray-600 text-sm">Web Image</label>
                  <Field id="WebImage" name="WebImage" className="border h-7 w-52 bg-blue-100" />
                  {touched.WebImage && errors.WebImage ? <div className="text-red-800 text-xs ">{errors.WebImage}</div> : null}
                </div>
                <div className="flex flex-col" >
                  <label htmlFor="MobileImage" className="text-gray-600 text-sm">Mobile Image</label>
                  <Field id="MobileImage" name="MobileImage" className="border h-7 w-52 bg-blue-100" />
                  {touched.MobileImage && errors.MobileImage ? <div className="text-red-800 text-xs ">{errors.MobileImage}</div> : null}
                </div>
              </div>

              <div className="flex justify-center pt-10">
                <button type="submit" className="border rounded-sm bg-blue-600 px-10 text-white text-sm py-2">Add Event</button>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpcomingForm;
