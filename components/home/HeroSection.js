import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledButton } from "../styled-button";
import PropTypes from "prop-types";
import Link from "next/link";

const HeroSection = ({ title, description, buttonText,link, bgImage, gradient,  }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        overflow: "hidden",
        height: "100vh",
        position: "relative",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            height: "100%",
            backgroundImage: `linear-gradient(${gradient}), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ mt: 0, mb: 2 }}>
            <Image src="/images/ACSM1.png" alt="Clinic Logo" width={100} height={100} priority />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              p: { xs: 2, md: 2},
            }}
          >
            <Box
              sx={{
                backdropFilter: "blur(6px)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 4,
                p: 3,
                boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                maxWidth: 500,
                width: "100%",
                
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Typography variant="h2" fontWeight={800} gutterBottom sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>
                  {title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>{description}</Typography>
                <Box
  mt={3}
  sx={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
                <Link href={link} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <StyledButton
                      variant="outlined"
                      size="large"
                      sx={{
                        borderRadius: 10,
                        border: "2px solid white",
                        backgroundColor: "transparent",
                        fontWeight: 700,
                        color: "white",
                        fontSize: 17,
                        px: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        gap: 1.5,
                        minWidth: "fit-content",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {buttonText}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                        </motion.span>
                      </Box>
                    </StyledButton>
                  </a>
                </Link>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default HeroSection;
