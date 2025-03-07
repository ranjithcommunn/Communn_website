import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const PrivacyPolicy = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "15vh", md: "25vh" },
          backgroundColor: "#f2f2f2f2",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack>
          <Typography
            sx={{
              color: "#2A53A2",
              fontSize: { xs: "25px", md: "30px" },
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Stack sx={{ p: { xs: 5, md: 15 } }}>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Last updated March 20, 2024
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            This privacy notice for Digitrii Solutions Private Limited ("we,"
            "us," or "our"), describes how and why we might collect, store, use,
            and/or share ("process") your information when you use our services
            ("Services"), such as when you:
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Visit our website at https://onecommunn.com/home, or any website of
            ours that links to this privacy notice
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Download and use our mobile application (One Communn), or any other
            application of ours that links to this privacy notice
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Questions or concerns?</b> Reading this privacy notice will help
            you understand your privacy rights and choices. If you do not agree
            with our policies and practices, please do not use our Services. If
            you still have any questions or concerns, please contact us at
            info@communn.io.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            SUMMARY OF KEY POINTS
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>What personal information do we process?</b> When you visit, use,
            or navigate our Services, we may process personal information
            depending on how you interact with us and the Services, the choices
            you make, and the products and features you use.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Do we process any sensitive personal information?</b>
            We do not process sensitive personal information.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Do we receive any information from third parties?</b>
            We may receive information from public databases, marketing
            partners, social media platforms, and other outside sources.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>How do we process your information?</b>
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>
              In what situations and with which parties do we share personal
              information?{" "}
            </b>
            We may share information in specific situations and with specific
            third parties.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>How do we keep your information safe? </b>
            We have organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>What are your rights? </b>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>How do you exercise your rights? </b>
            The easiest way to exercise your rights is by submitting a data
            subject access request, or by contacting us. We will consider and
            act upon any request in accordance with applicable data protection
            laws.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            1. WHAT INFORMATION DO WE COLLECT?
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            Personal information you disclose to us
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>In Short:</b> We collect personal information that you provide to
            us.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Personal Information Provided by You.</b>
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </Typography>
          <br></br>
          <List sx={{ fontFamily: "Montserrat" }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="names"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="phone numbers"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="email addresses"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="usernames"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="passwords"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="contact or authentication data"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="billing addresses"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="debit/credit card numbers"
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
          </List>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Sensitive Information.</b>
            We do not process sensitive information.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Payment Data.</b>
            We may collect data necessary to process your payment if you make
            purchases, such as your payment instrument number, and the security
            code associated with your payment instrument. All payment data is
            stored by Easebuzz. You may find their privacy notice link(s) here:
            https://easebuzz.in/privacy/.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Social Media Login Data.</b>
            We may provide you with the option to register with us using your
            existing social media account details, like your Facebook, Twitter,
            or other social media account. If you choose to register in this
            way, we will collect the information described in the section called
            "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Application Data. </b>
            If you use our application(s), we also may collect the following
            information if you choose to provide us with access or permission:
          </Typography>
          <br></br>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Push Notifications. We may request to send you push 
                            notifications regarding your account or certain features of the application(s).
                             If you wish to opt out from receiving these types of communications, you may turn them off
                              in your device's settings.
                         "
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
          </List>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            <b>Application Data. </b>
            If you use our application(s), we also may collect the following
            information if you choose to provide us with access or permission:
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            This information is primarily needed to maintain the security and
            operation of our application(s), for troubleshooting, and for our
            internal analytics and reporting purposes.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            Information automatically collected
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            In Short: Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            The information we collect includes:
          </Typography>
          <br></br>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Log and Usage Data. Log and usage data is service-related, diagnostic,
                             usage, and performance information our servers automatically collect when you access or use our
                              Services and which we record in log files. Depending on how you interact with us, this log data may
                               include your IP address, device information, browser type, and settings and information about your
                                activity in the Services (such as the date/time stamps associated with your usage, pages and files 
                                viewed, searches, and other actions you take such as which features you use), device event information
                             (such as system activity, error reports (sometimes called crash dumps), and hardware settings)."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
          </List>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            Information collected from other sources
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We may collect limited data from public databases,
            marketing partners, social media platforms, and other outside
            sources.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In order to enhance our ability to provide relevant marketing,
            offers, and services to you and update our records, we may obtain
            information about you from other sources, such as public databases,
            joint marketing partners, affiliate programs, data providers, social
            media platforms, and from other third parties. This information
            includes mailing addresses, job titles, email addresses, phone
            numbers, intent data (or user behavior data), Internet Protocol (IP)
            addresses, social media profiles, social media URLs, and custom
            profiles, for purposes of targeted advertising and event promotion.
            If you interact with us on a social media platform using your social
            media account (e.g., Facebook or Twitter), we receive personal
            information about you such as your name, email address, and gender.
            Any personal information that we collect from your social media
            account depends on your social media account's privacy settings.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </Typography>
          <br></br>
          <List sx={{ fontFamily: "Montserrat" }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To facilitate account creation and authentication and otherwise manage user accounts. 
                            We may process your information so you can create and log in to your account, as well as keep your account 
                            in working order."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To deliver and facilitate delivery of services to the user.
                             We may process your information to provide you with the requested service."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To send administrative information to you. We may process your information to send you details about our products 
                            and services, changes to our terms and policies, and other similar information."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To enable user-to-user communications. We may process your information
                             if you choose to use any of our offerings that allow for communication with another user."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing 
                            emails at any time. For more information, see WHAT ARE YOUR PRIVACY RIGHTS? below."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="To identify usage trends. We may process information about how you use our Services to better 
                            understand how they are being used so we can improve them."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
          </List>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We may share information in specific situations described
            in this section and/or with the following third parties.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We may need to share your personal information in the following
            situations:
          </Typography>
          <br></br>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, 
                            financing, or acquisition of all or a portion of our business to another company."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Offer Wall. Our application(s) may display a third-party hosted offer wall.
                             Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to
                              users in return for the acceptance and completion of an advertisement offer. Such an offer wall may 
                              appear in our application(s) and be displayed to you based on certain data, such as your geographic 
                              area or demographic information. When you click on an offer wall, you will be brought to an external 
                              website belonging to other persons and will leave our application(s). A unique identifier, such as your
                               user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your 
                               account with the relevant reward."
                sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}
              />
            </ListItem>
          </List>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: If you choose to register or log in to our Services using
            a social media account, we may have access to certain information
            about you.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </Typography>

          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We keep your information for as long as necessary to
            fulfill the purposes outlined in this privacy notice unless
            otherwise required by law.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We aim to protect your personal information through a
            system of organizational and technical security measures.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </Typography>
          <br></br>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: We do not knowingly collect data from or market to
            children under 18 years of age.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Services. If we learn
            that personal information from users less than 18 years of age has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18, please contact us at info@communn.io.
          </Typography>
          <br></br>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: You may review, change, or terminate your account at any
            time.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Withdrawing your consent: If we are relying on your consent to
            process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "15PX",
              fontWeight: "bold",
            }}
          >
            Account Information
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Log in to your account settings and update your user account.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            If you have questions or comments about your privacy rights, you may
            email us at info@communn.io.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. We
            encourage you to review this privacy notice frequently to be
            informed of how we are protecting your information.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            If you have questions or comments about this notice, you may email
            us at info@communn.io or contact us by post at:
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            Digitrii Solutions Private Limited <br></br>
            No 1/A, M K K Road<br></br>
            2nd stage, Rajajinagar<br></br>
            Bengaluru, Karnataka 560021<br></br>
            India
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            You have the right to request access to the personal information we
            collect from you, change that information, or delete it.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "25PX",
              fontWeight: "bold",
            }}
          >
            Use of Google Workspace APIs
          </Typography>
          <br></br>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            One Communn integrates with Google Workspace APIs (such as Google Drive and Google Calendar) to enhance user experience and provide core functionalities like meeting recordings and event scheduling.
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            We explicitly affirm that One Communn does not use any data obtained through Google Workspace APIs to develop, improve, or train generalized artificial intelligence (AI) or machine learning (ML) models.
          </Typography>
          <Typography sx={{ fontFamily: "Montserrat", fontSize: "15PX" }}>
            All accessed data is solely used for the intended functionality of the application and is not shared with third parties for AI/ML purposes.</Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Stack>
      </Box>
    </>
  );
};
