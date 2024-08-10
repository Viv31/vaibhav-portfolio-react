import React from 'react';
import LiquidGauge from 'react-liquid-gauge';
import portfolio_data from './jsondata/portfolio_data';

function Skills() {
  const { skillsData } = portfolio_data;

  return (
    <div className="container-fluid software-skills-container-fluid">
      <div className="container">
        <h1 className='text-center mt-2 mb-2'>Skills</h1>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="col-6 col-md-2 skill-section" key={index}>
              <div style={{ marginBottom: '10px', position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }}>
                <LiquidGauge
                  width={120}
                  height={120}
                  value={skill.value}
                  circleColor={skill.circleColor}
                  waveColor={skill.waveColor}
                  textSize={1}
                  textOffsetX={0}
                  textOffsetY={0}
                  riseAnimation
                  waveAnimation
                  waveFrequency={2}  // Adjust wave frequency for faster animation
                  waveAmplitude={5}  // Adjust wave amplitude to make waves higher
                  circleStyle={{
                    fill: skill.circleColor
                  }}
                  waveStyle={{
                    fill: skill.waveColor
                  }}
                  textRenderer={() => (
                    <tspan>
                      <tspan className="value-text">{skill.label} ({skill.value}%)</tspan>
                    </tspan>
                  )}
                />
                <i className="fas fa-biking skill-icon"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
