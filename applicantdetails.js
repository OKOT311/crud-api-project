
import {query} from "../utils/connectToDB.js";
import { v4 as uuidv4 } from 'uuid';
let Applicants = [];
export async function createapplicant (req, res){
const applicant = req.body;
 Applicants.push({ ...applicant, id: uuidv4() });
  res.send(`Applicant with the name ${applicant.ApplicantName} added to the database!`);
}

export async function getapplicants  (req, res) {
  res.send(Applicants);
}

export async function getApplicantById(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM applicants WHERE applicant_id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Applicant not found"
            });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
    console.error("GET APPLICANT ERROR:", error);

    res.status(500).json({
        error: error.message
    });
}
}

export async function deleteapplicant  (req, res) {
  const { id } = req.params;
  Applicants = Applicants.filter((applicant) => applicant.id !== id);
  res.send(`Applicant with id ${id} deleted successfully`);
}

export async function updateapplicant  (req, res) {
  const { id } = req.params;
  const applicant = Applicants.find((applicant)=>applicant.id === id);
  const { ApplicantName, Email } = req.body;
  if(ApplicantName) applicant.ApplicantName = ApplicantName;
  if(Email) applicant.Email = Email;
  res.send(`Applicant with id ${id} updated successfully`);
}