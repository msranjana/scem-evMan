const express=require('express')
const {requireAuth,options}=require('../middlewares/authM')
const {isContestActive}=require('../middlewares/contestAuth')
const { startContest, manageViolations } = require('../controllers/contestCon');
const router=express.Router();
router.get('/pgs',requireAuth({options}),(req,res)=>{res.send("I'm up")})

// @route   GET /api/contests/:id/enter
// @desc    Enter/Access a contest (check if user can take the test)
// @access  Private + Contest Authorization
router.get('/:id/enter', requireAuth(options), isContestActive, (req, res) => {
    res.json({ 
        success: true, 
        message: 'Access granted to contest',
        contest: {
            id: req.contest._id,
            title: req.contest.title,
            description: req.contest.description,
            startTime: req.contest.startTime,
            endTime: req.contest.endTime,
            questions: req.contest.questions
        },
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
});

// @route   POST /api/contests/:id/submit
// @desc    Submit answer for a contest question
// @access  Private + Contest Authorization
router.post('/:id/submit', requireAuth(options), isContestActive, (req, res) => {
    res.json({ 
        success: true, 
        message: 'Submission received - contest access verified',
        contestId: req.contest._id,
        userId: req.user._id,
        timestamp: new Date()
    });
});

// @route   POST /api/contests/:id/start
// @desc    Start a contest (Admin only)
// @access  Private
router.post('/:id/start', requireAuth(options), startContest);

// @route   POST /api/contests/:id/violation
// @desc    Manage violations in a contest (Admin only)
// @access  Private
router.post('/:id/violation', requireAuth(options), manageViolations);

//TODO
module.exports=router;