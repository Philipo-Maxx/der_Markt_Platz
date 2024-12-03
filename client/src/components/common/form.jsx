import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectTrigger } from "../ui/select";
import { SelectContent, SelectValue, SelectItem } from "../ui/select";
import { ClipLoader } from "react-spinners";

import { Button } from "../ui/button";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  loading,
  imageLoadingState,
  isBtnDisabled,
}) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;
    let value = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            disabled={imageLoadingState}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;
      case "select":
        element = (
          <Select
            disabled={imageLoadingState}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case "textarea":
        element = (
          <Textarea
            disabled={imageLoadingState}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;
      default:
        element = (
          <Input
            disabled={imageLoadingState}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full" disabled={isBtnDisabled}>
        {/* {isBtnDisabled ? <ClipLoader color="#61459e" /> : `${buttonText}`} */}
        {buttonText}
      </Button>
    </form>
  );
};

export default CommonForm;
