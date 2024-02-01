import React from "react"
// Import color constants
import { primaryGreen, offWhite } from "./../../shared/colors";


// Configuration options for radar chart customization
const options = {
    scales: {
      r: {
        angleLines: {
          // Color of the angle lines in the radar chart
          color: primaryGreen + 'ff'
        },
        grid: {
          // Color of the grid lines in the radar chart
          color: primaryGreen + '4d'
        },
        ticks: {
          // Color of the ticks in the radar chart
          color: offWhite,
          // Background color of the ticks in the radar chart
          backdropColor: primaryGreen + 'b3',
          // begin all ticks at Zero
          beginAtZero: true
        },
        pointLabels: {
          // Font settings for the point labels in the radar chart
          font: {
            size: 12,
            weight: 700
          }
        }
      }
    },
    elements: {
      // Responsive and aspect ratio settings for the radar chart
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      line: {
        // Width of the lines connecting data points in the radar chart
        borderWidth: 5
      },
      point: {
        // Radius settings for the points in the radar chart
        radius: 8,
        hoverRadius: 30,
        hitRadius: 10
      },
      plugins: {
        // Legend settings for the radar chart
        legend: {
          display: false
        }
      }
    }
  };
  
  export default options;