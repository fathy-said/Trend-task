





import React, { useCallback, useEffect } from 'react';
import ReactImageUploading from 'react-images-uploading';
import { UploadIcon } from '../../asset/Icons';
      const maxNumber = 69;

const UploadImgBox = ({ errors, watch, register, setError, setValue}) => {
  const [images, setImages] = React.useState([]);

  //set default image
  useEffect(() => {
    if ( watch("img") !== images[0]?.data_url) {
      if (!watch("img")) {
        // setImages([{ data_url: watch("img") }]);
        // setError("img");
              setImages([]);

      }
      // else {
      // setImages([])
      // }

    }
  }, [watch("img") ]);


    const onChange = useCallback(
      (imageList, addUpdateIndex) => {
        setImages(imageList);
        setValue("img", imageList[0]?.file);
        setError("img");
      },
      [setValue, setError]
    );
  return (
    <>
      <ReactImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        name="img"
        dataURLKey="data_url"
        acceptType={["jpg", "gif", "png", "svg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className=" w-full">
            <div
              onClick={onImageUpload}
              {...dragProps}
              style={isDragging ? { background: "#b1f0ca" } : null}
              className="w-full upload__image-wrapper cursor-pointer h-[125px] border-[2px] border-color_14 rounded-[12px] flex justify-center items-center flex-col "
            >
              {images?.length ? (
                imageList?.map((image, index) => (
                  <div
                    key={index}
                    className="image-item  w-full h-full flex justify-center items-center overflow-hidden"
                  >
                    <img
                      src={image.data_url}
                      alt=""
                      className=" w-full h-full max-w-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <>
                  <button
                    type="button"
                    style={isDragging ? { background: "#7F56D9" } : null}
                    className=" p-[10px] !rounded-[8px]  chart-shadow"
                  >
                    <UploadIcon />
                  </button>
                  <div className=" flex justify-center items-center gap-[4px] mt-[12px]">
                    <h4 className="text-[14px] font-[400] text-color_16 leading-[19.6px]">
                      أو قم بسحبه هنا
                    </h4>
                    <h4 className="text-[14px] font-[600] text-color_12 leading-[19.6px]">
                      أضغط هنا لرفع الملف
                    </h4>
                  </div>
                  <h4 className="text-[12px] font-[400] text-color_16 leading-[16.8px] mt-[4px]">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </h4>
                </>
              )}
            </div>
            {errors?.img?.message && (
              <div className=" text-[red] font-[500]  text-[14px]  w-full  flex justify-end  mt-[12px] items-start ">
                <span className=' text-end'>{errors?.img?.message}</span>
              </div>
            )}
          </div>
        )}
      </ReactImageUploading>
    </>
  );
};

export default UploadImgBox;
