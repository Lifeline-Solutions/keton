const Resources = () => {
  return (
    <div className="h-full flex flex-col justify-center items-start bg-primaryBg py-10 px-8 gap-6">
      <div className="mt-6 w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Troubleshooting Guide for EQA Results
        </h4>
        <p className="text-left text-sm leading-7">
          Your External Quality Assurance (EQA) performance report will help you
          understand the quality of your lab&apos;s test results. EQA should be
          done in addition to internal quality controls (QC). EQA allows you to
          see how your lab is performing compared to a group oh your peers and
          general comparison. All results on your EQA performance report should
          be examined for unacceptable results, unusual trends, sudden shifts,
          or other problems. Unacceptable EQA results can arise from both
          systematic and random sources of error. Systematic Errors are shown by
          all your EQA results on one side of the target value and a bias is
          seen. For example, all of your EQA results are above or below the peer
          group mean. Random Error is shown by results that are on average close
          to the target value but there are a few exceptions that show large
          deviations from the target value.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Were my EQA results within the acceptable range?
        </h4>
        <p className="text-left text-sm leading-7">
          Were my EQA results within the acceptable range? Participant data and
          Comparative Group data would list the information that would indicate
          if the EQA result is satisfactory or not and how it compares to other
          labs.
          <br />
          1. Participant Data Results that were outside the acceptable range are
          signified with UNACC. SDI (Standard deviation index) is a measure of
          distance, or bias, of one result compared to the mean of results from
          its peer group. The greater the SDI, the farther is one result from
          the mean of its peer group, which indicates deviation from normal
          performance.
          <br />
          2. Comparative Group Data To review how one performed in reference to
          others, the data under Comparative Group Data would be helpful. The
          acceptable range is determined by the evaluation criteria for that
          analyte. For example, if the evaluation criteria is Peer Group Mean
          +/- 2SD then the target value (peer group mean) is determined from the
          results submitted in that peer group, after outliers have been
          removed. We would then add and subtract 2 Standard Deviations from the
          mean to get the upper and lower limits of the acceptable range.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          What are possible sources of error to cause unacceptable results?
        </h4>
        <p className="text-left text-sm leading-7">
          Always ensure that your registration is correct in TEQA configuration
          section. If you have selected the incorrect reagent, instrument or sub
          method it could cause your results to be evaluated in the incorrect
          peer group. Sporadic test results identified as unacceptable can be
          classified as random errors while series of test results identified as
          unacceptable may be due to a systematic error. Pre-analytical
          Analytical Post-analytical
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Causes or Random Errors
        </h4>
        <ul className="text-left text-sm leading-7 list-disc flex flex-col gap-4 px-6">
          <li className="capitalize">
            Insufficient mixing of sample, especially following freezing and for
            samples requiring good homogeneity (for example, haematology
            samples) Poor pipetting Transcription errors
          </li>
          <li>
            Sample mix-up Incorrect result unit submitted testing not performed
            immediately after sample vials are opened (for example, blood gases
            vials) Incorrect sub method selected
          </li>
          <li>
            Dilution-related problem (wrong dilution factor used, result not
            corrected for dilution factor, incorrect calculation) Online result
            entry errors (&apos;typo&apos;)
          </li>
          <li>
            Suspected/known imprecision problem with test Calculation (manual
            and automatic) errors
          </li>
          <li>
            Cross-contamination or carryover Result unit conversion not done or
            done incorrectly
          </li>
          <li>
            Mis-labelled sample in sampling rack Mis-graded/Mis- interpreted
            result Causes of Systematic Errors
          </li>
          <li>
            Inaccurate reconstitution (wrong diluent, inaccurate diluent amount,
            inadequate equilibration of reconstituted material) Reagents
            contaminated, expired Incorrect sequence of results entered during
            online result entry
          </li>
          <li>
            Insufficient mixing/centrifuging before testing Instrument error or
            malfunction
          </li>
          <li>
            Incorrect storage of test kits and/or reagents and/or EQA samples
            instrument parameters changed
          </li>
          <li>
            Compromised samples during shipping Ineffective or inconsistent
            washing Temperature of samples not proper for testing (room
            temperature is required for some samples) Contamination of equipment
            Calibration-related issues with instrument (not calibrated, expired
            calibration, suboptimal calibration results, calibration drift)
          </li>
          <li>
            Wrong assay used for testing sample *Note that some of these causes
            can result in both a systemic error and a random error. For example,
            insufficient mixing of EQA samples could affect all result levels,
            resulting in a systematic error, if wrong pre-analytical
            instructions are followed.
          </li>
        </ul>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2 text-red-500">
          Do I need to do anything further if I do not have any unacceptable
          results?
        </h4>
        <p className="text-left text-sm leading-7">
          <span className="font-bold">Yes! </span>
          <br />
          Even if your results are acceptable you can determine if trends are
          developing that could result in a future failure. The best way to
          detect problems is to examine the Standard Deviation Index (SDI)
          results. Although looking at the SDI will give a quick interpretation
          of your results, you may have unacceptable results with small SDIs.
          This can occur if the evaluation criteria do not use the SD to
          generate the acceptable range. If EQA data has a Gaussian
          distribution, then 68% of results should fall within 1 SD, 95% within
          2 SD, and 99.7% within 3 SD. Therefore, you should want your EQA data
          to have a small SDI (close to the target) and have both positive and
          negative SDI for any given analyte to eliminate the possibility of
          bias. The performance reports will give your SDI. The Standard
          Deviation Index (SDI) is calculated by: SDI = (your result – peer
          group mean)/ peer group SD.
          <br />
          <span className="font-bold">Question 1: </span>
          <br />
          <span className="italic">
            Do half or more of my SDI results exceed +/- 1?
          </span>
          <br />
          If yes, review your procedures and instrumentation for possible
          systematic errors that could result in a future failure.
          <br />
          <span className="font-bold">Question 2: </span>
          <br />
          <span className="italic">
            Are all of my SDIs positive or all negative?
          </span>
          <br />
          If so, significant bias (systematic error) is present and calibration
          data should be reviewed to determine if a shift has occurred. Bias can
          usually be eliminated by recalibration.
          <br />
          <span className="font-bold">Question 3: </span>
          <br />
          <span className="italic">
            Does the range of SDI between the largest and smallest EQA result
            exceed 4 SDI?
          </span>
          <br />
          If so, random error is a possibility and the procedure should be
          evaluated for potential sources of imprecision. If you are able to
          answer “No” to all of the above questions, then... “Congratulations on
          successfully completing your EQA test event!” I have unacceptable
          results... Now what?
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Determine what caused your unacceptable results and take corrective
          action.
        </h4>
        <p className="text-left text-sm leading-7">
          All EQA errors must be thoroughly investigated and documented.
          Investigation should include the following steps.
          <br />
          <span className="font-bold">Question 1: </span>
          <br />
          <span className="italic">Is one result more than +/- 3 SDI?</span>
          <br />
          If so, there is a high probability of random error such as
          transcription error. Review the report carefully and determine if it
          is a clerical error or another problem mentioned.
          <br />
          <span className="font-bold">Question 2: </span>
          <br />
          <span className="italic">
            Is there more than one result that has a large SDI (&gt; +/- 3) and
            the SDI difference is also large between these results?
          </span>
          <br />
          If so there is a high probability of results entered in the wrong unit
          or possibly the samples were mixed up.
          <br />
        </p>
        <p className="text-left text-sm leading-7 mt-8">
          <span className="font-bold">Step 1:</span>
          <br />
          Review your copy of the original EQA data submission form and compare
          it to the performance report. You should look for transcription
          errors, transposition of answers, coding errors, miscalculations, or
          grading mistakes.
          <br />
          <span className="font-bold">Step 2:</span>
          <br />
          Review all test result printouts from your instrument. You should look
          for incorrect units on your performance report from your instrument
          print out and also look for transcription errors.
          <br />
          <span className="font-bold">Question 3: </span>
          <br />
          <span className="italic">
            Do you have unacceptable results and all above situations have been
            ruled out or do not apply?
          </span>
          <br />
          <span className="font-bold">Step 3:</span>
          <br />
          If clerical and transcription errors have been ruled out, then a
          systematic error could have happened and the sources of systematic
          errors that are listed above should be investigated with the focus on
          the analytical errors. Review quality control results from the same
          day - was the EQA result accepted when QC was out of control? Were
          there any QC shifts or trends? Review calibration data from the
          testing period – had the instrument just been calibrated? How was the
          calibration compared to previous calibrations? Review your
          registration in TEQA website to ensure that the reagent catalogue
          numbers in TEQA match the catalogue numbers of your reagent and the
          sub method selected is correct.
          <br />
          <span className="font-bold">Step 4:</span>
          <br />
          Retest the original EQA sample if possible and with QC material at the
          same time if desired. If repeat testing produces an acceptable result,
          then the original result was affected by analytical error. Note that
          if the repeat results are optimal it could mean that instrument
          maintenance might have been done before repeat testing which would
          have corrected any instrument problems.
          <br />
          <span className="font-bold">Question 4: </span>
          <br />
          <span className="italic">
            Is the EQA result still unacceptable? If the repeat result is still
            unacceptable, attention should be focused on specimen identification
            and labelling errors, if testing is performed from an aliquot
            instead of from the original vial/container. If possible, retest by
            sampling from the original vial/container and not from an aliquot.
            Specimen preparation should also be reviewed for reconstitution or
            dilution error, pipetting problems, and aliquot evaporation due to
            delay between reconstitution and analysis. EQA material should be
            examined for instability, contamination, chemical interference, an
            incompatible matrix effect, or shipping delays. Review quality
            management tools such as instrument logs, maintenance logs, and
            troubleshooting logs to see if, before the testing of samples, major
            maintenance (i.e. sampling probes replaced, instrument parameters
            changed, etc.) was performed or occurrence of incidents which might
            potentially affect results. It would also be helpful to ask the
            laboratory personnel who performed the original testing to see how
            the testing was handled, especially for tests requiring more manual
            procedures.
          </span>
          <br />
          <span className="font-bold">Step 5:</span>
          <br />
          Determine your corrective action. Do you need to recalibrate? Was it a
          random error that better attention will correct? Did your error affect
          the testing done on patient samples? Should better instructions be
          given to staff on reconstituting, handling, and storing EQA samples?
          Ensure that you can explain all of your unacceptable results and your
          instrument is producing accurate results. Continue to monitor your QC
          results after the test event. Document your investigations and
          corrective action and prepare for the next test event.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          My current EQA evaluation has unacceptable results again.
        </h4>
        <p className="text-left text-sm leading-7">
          Historical performance reports could be of help in this case as it
          helps to monitor trends and shifts of data, which could result in
          systematic errors over time.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Why are my results not evaluated?
        </h4>
        <p className="text-left text-sm leading-7">
          The most common reason in which results are not evaluated could be:
          <br />
          A.) the peer group for your laboratory&apos;s particular
          instrument/reagent/method could be small (&lt; 5 participants) and
          thus not statistically sound to be evaluated as a separate group
          and/or
          <br />
          B.) having your result evaluated with a larger peer group would mean
          an unjust evaluation with divergent data It has been documented in
          studies and articles that bias is often times seen between assays. In
          other words, because of the inherent differences between
          instruments/reagents/methodologies and depending on the size of the
          bias between groups, often times it is best to evaluate with more
          specific (i.e. similar) peer groups than broad peer groups. A larger
          peer group means this bias effect would be incorporated which as well
          might falsely increase the acceptable result range if SD is used in
          calculating the range.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          ...But are those results satisfactory?
        </h4>
        <p className="text-left text-sm leading-7">
          Participation Statistics reports (Lab Reports &gt; Participation
          Statistics) could be generated in TEQA for a specific test event and
          program. These reports would list the different evaluated peer groups,
          the acceptable result ranges of those peer groups, and other relevant
          statistics within the peer groups. Even though your own peer group is
          not available, it is still beneficial for quality assurance purposes
          to examine the report and see if your result is similar to other
          results generated through different instruments and methods.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          Is further help needed?
        </h4>
        <p className="text-left text-sm leading-7">
          Submit a help request to if necessary and a support staff member will
          respond as soon as possible.
        </p>
      </div>

      <div className="w-3/4">
        <h4 className="uppercase sm:text-xl text-xl font-bold mb-2">
          EXAMPLES OF TOOLS YOU CAN USE.
        </h4>
        <p className="text-left text-sm leading-7">
          ROOT CAUSE ANALYSIS
          <br />
          THE 6 M&apos;s CHECKLIST
          <ol className="text-left text-sm leading-7 list-inside">
            <li> I. Man/People</li>
            <li>II. Machines/Measuring Instruments</li>
            <li>III. Material</li>
            <li>IV. Milieu/ Environment</li>
            <li>V. Methods</li>
            <li>VI. Measurement</li>
          </ol>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 sm:-mt-72 -mt-40">
        <img
        src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1696949999/keton/TABLES-01_jfes2z.png"
        alt="table"
        />
        <img
        src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1696949999/keton/TABLES-02_mdvd3p.png"
        alt="table"
        />
        <img
        src="https://res.cloudinary.com/dlahz5ciz/image/upload/v1696949999/keton/TABLES-03_g1pcpj.png"
        alt="table"
        />
        <button
          type="button"
          className="bg-primaryGreen text-white text-sm capitalize py-2 px-8 rounded mt-4 w-1/2 font-bold"
          onClick={() => {
            window.open(
              '/ESfEQA_REPORT INTERPRETATION.pdf',
              '_blank'
            );
          }}
        >
          Download file
        </button>

      </div>
    </div>
  );
};

export default Resources;
