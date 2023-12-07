import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState, FC } from "react";

interface Department {
  department: string;
  sub_departments: string[];
}
const CheckboxAccordion = () => {
  const deptData: Department[] = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  return (
    <Box sx={{width:"50%", margin:"auto"}}>
        <Typography mt={4} align="center" variant="h5">Accordion</Typography>
      {deptData.map((dept) => (
        <Accordion key={dept.department} dept={dept} />
      ))}
    </Box>
  );
};

interface AccordionProps {
  dept: Department;
}

const Accordion: FC<AccordionProps> = ({ dept }) => {
  const [showSubDept, setShowSubDept] = useState(false);
  const [selectAllSubDept, setSelectAllSubDept] = useState(false);
  const [selectedSubDeptArr, setSelectedSubDeptArr] = useState<number[]>([]);

  const handleSelectSubDept = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    let prevArr = [...selectedSubDeptArr];
    if (e.target.checked) {
      prevArr.push(idx);
      setSelectedSubDeptArr(prevArr);
    } else {
      const index = prevArr.indexOf(idx);
      prevArr.splice(index, 1);
      setSelectedSubDeptArr(prevArr);
    }
    if (prevArr.length === dept.sub_departments.length) {
      setSelectAllSubDept(true);
    } else {
      setSelectAllSubDept(false);
    }
  };

  const handleSelectAllSubDept = () => {
    if (!selectAllSubDept) {
      let newArr: number[] = [];
    for(let i=0;i<dept.sub_departments.length;i++){
        newArr.push(i);
    }
      setSelectedSubDeptArr(newArr);
    } else {
      setSelectedSubDeptArr([]);
    }
    setSelectAllSubDept((prev) => !prev);
  };

  return (
    <Box>
      <Box sx={{display:"flex", justifyContent:"start", alignItems:"center"}}>
        <FormControlLabel
        label={dept.department}
        control={
          <Checkbox
          checked={selectAllSubDept} onChange={handleSelectAllSubDept}
          />
        }
      />
      <Typography>{`(${dept.sub_departments.length})`}</Typography>
      <Typography ml={2} variant="h5" sx={{cursor:"pointer"}} onClick={()=>setShowSubDept((prev)=>!prev)}>{showSubDept ? "-" : "+"}</Typography>
      </Box>
      {showSubDept && (
        <Box sx={{display:"flex", flexDirection:"column"}} ml={3}>
            {dept.sub_departments.map((subDept, idx) => (
                <FormControlLabel
                key={subDept}
                label={subDept}
                control={
                  <Checkbox
                  checked={selectAllSubDept || selectedSubDeptArr.includes(idx)}
                  onChange={(e) => handleSelectSubDept(e, idx)}
                  />
                }
              />
            ))}
        </Box>
      )}
    </Box>
  );
};

export default CheckboxAccordion;
