import React, { useState } from "react";
import { faqs } from "../faqdata";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section>
      <Container
        maxWidth="md"
        sx={{ mt: 5, p: 3, bgcolor: "#fff", borderRadius: 2 }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "600", fontSize: "36px" }}
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          gutterBottom
          sx={{ fontWeight: "400", fontSize: "20px" }}
        >
          Everything you need to know about the product and billing.
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={(e, isExpanded) => setExpanded(isExpanded ? index : null)}
            disableGutters
            sx={{
              mb: 0,
              boxShadow: "none",
              borderBottom: "1px solid #ddd",
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <RemoveCircleOutlineIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )
              }
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default Faq;
